"use client"

import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useTranslations } from "../../../../i18n/client"

const SignInPrompt = () => {
  const t = useTranslations('cart')
  
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
          {t('already_have_account')}
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
          {t('sign_in_better_experience')}
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button variant="secondary" className="h-10" data-testid="sign-in-button">
            {t('sign_in')}
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
