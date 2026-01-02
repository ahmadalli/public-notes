# Oneliners

:::info

You can access to this page from [oneliner.sh](https://oneliner.sh).

:::

## Utilities

### Deleting All Records of a Cloudflare Zone

:::danger

This will irreversibly remove all DNS records of the zone. If you have anything important on the zone, you better import all your DNS records in a Terraform state with [`cf-terraforming`](https://developers.cloudflare.com/terraform/advanced-topics/import-cloudflare-resources/#cf-terraforming), create a backup of the Terraform resources and make this kind of change via Terraform

:::

I made a mistake of selecting "Import all DNS records" for a new domain I purchased from another places, which resulted in more than 700 records to be imported. Cloudflare UI doesn't have bulk edit/remove functionality so I created this short script to delete all records as I didn't have any important records on the zone.


```shell
CLOUDFALRE_API_EMAIL=""
CLOUDFALRE_API_KEY=""
CLOUDFALRE_ZONE_ID=""

# List all dns records

while true; do
  dns_records=$(curl -s --fail -X GET "https://api.cloudflare.com/client/v4/zones/$CLOUDFALRE_ZONE_ID/dns_records" \
    -H "X-Auth-Email: $CLOUDFALRE_API_EMAIL" \
    -H "X-Auth-Key: $CLOUDFALRE_API_KEY" \
    -H "Content-Type: application/json")
  total_count=$(echo $dns_records | jq -r '.result_info.total_count')
  if [ $total_count -eq 0 ]; then
    break
  fi

  # loop over dns records
  echo "$dns_records" | jq -cr '.result[]' | while read -r dns_record; do
    dns_record_id=$(echo $dns_record | jq -r '.id')
    dns_record_name=$(echo $dns_record | jq -r '.name')
    dns_record_content=$(echo $dns_record | jq -r '.content')

    # delete dns record
    echo "Deleting dns record $dns_record_name with id $dns_record_id and content $dns_record_content"
    curl -s --fail -X DELETE "https://api.cloudflare.com/client/v4/zones/$CLOUDFALRE_ZONE_ID/dns_records/$dns_record_id" \
      -H "X-Auth-Email: $CLOUDFALRE_API_EMAIL" \
      -H "X-Auth-Key: $CLOUDFALRE_API_KEY" \
      -H "Content-Type: application/json"
    echo
  done
done
```

## uBlock Origin

### Blocking Markplaats Ads

```css
##li.hz-Listing--list-item.hz-Listing:has(.hz-Listing-seller-link > .hz-TextLink.hz-Listing-sellerCoverLink.hz-Link--isolated.hz-Link > span)
```

## YouTube

### Extract Transcript as Text

You need [yt-dlp](https://github.com/yt-dlp/yt-dlp) for this:

```shell
$YOUTUBE_LINK=""

yt-dlp --skip-download --write-subs --write-auto-subs --sub-lang en --sub-format ttml --convert-subs srt --output "transcript.%(ext)s" "$YOUTUBE_LINK"\
&& sed -i '' -e '/^[0-9][0-9]:[0-9][0-9]:[0-9][0-9].[0-9][0-9][0-9] --> [0-9][0-9]:[0-9][0-9]:[0-9][0-9].[0-9][0-9][0-9]$/d' -e '/^[[:digit:]]\{1,3\}$/d' -e 's/<[^>]*>//g' ./transcript.en.srt\
&& sed -e 's/<[^>]*>//g' -e '/^[[:space:]]*$/d' transcript.en.srt > output.txt\
&& rm transcript.en.srt
```

